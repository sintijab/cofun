import { AIAssistantChat, Box, ButtonList, LipsIcon } from "@co-fun/ui";
import { socketInit, socket } from "../socket";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSound, fetchSounds, selectSounds } from "../slices/soundFetch";
import { AppDispatch } from "../store";
import { useSession } from "next-auth/react";

type IButtonSelect = { title: string; description: string; answers: { answer: string; key: string }[] };

type IResponse = { type: string; activeKey: string, id: string; questions: string[], data: any, suggestions: { answer: string; key: string }[] };

const getQuestions = (messages: { response: string, author?: string }[], response: { activeKey: string, questions: string[], suggestions: { answer: string; key: string }[] }) => {
  let updated = [];
  updated = [
    ...messages,
    { response: response?.questions[0] }
  ];
  if (!!response.questions && response.questions.length > 0) {
    updated = [
      ...messages,
      ...(response?.questions?.map((question: string) => ({ response: question })))
    ];
  }
  return updated;
}


export default function Chat() {
  const [messages, setMessages] = useState<{ response: string, author?: string }[]>([])
  const [suggestions, setSuggestions] = useState<{ answer: string, key: string }[]>([])
  const [buttonSelect, setButtonSelect] = useState<{ title: string, description?: string, answers: { answer: string; key: string }[] }>()
  const dispatch = useDispatch<AppDispatch>();
  const [activeKey, setActiveKey] = useState<string>();
  const [id, setId] = useState<string>();
  const [requestType, setType] = useState<"open" | "technical">();
  const soundsList = useSelector(selectSounds);
  const { data: session } = useSession();
  const email = session?.user?.email;
  socketInit();

  useEffect(() => {
    socket.volatile.emit('init', (response: { activeKey: string, questions: string[], suggestions: { answer: string; key: string }[] }) => {
      const updated = getQuestions(messages, response);
      setMessages(updated);
      setActiveKey(response.activeKey);
      if (response.suggestions) {
        setSuggestions(response.suggestions);
      }
    });
  }, [])

  useEffect(() => {
    if (id === 'close') {
      let d = new Date();
      if (id && requestType) {
        dispatch(fetchSounds({ data: { ...soundsList[0], date: d.toLocaleString('en',{ timeZone:'Europe/Berlin' }) }, endpoint: requestType }))
        setId(undefined)
      }
    }
  }, [requestType])

  const onSubmit = (data: string) => {
    let updated = [
      ...messages,
      { response: data, author: 'Sintija' }
    ];
    setMessages(updated);
    socket.volatile.emit('update_item', activeKey, data, (response: IResponse & IButtonSelect) => {
      try {
        setId(response.id);
        if (response.type) {
          console.log(requestType)
          debugger;
          setType(response.type as "open" | "technical");
        }
        dispatch(addSound({ [id as string]: data }))
      } catch (e) {
        console.log(e)
      }
      setActiveKey(response.activeKey);
      updated = getQuestions(updated, response);
        if (response.suggestions) {
          setSuggestions(response.suggestions);
        }
        setMessages(updated)
        if (response.type === "button_select") {
          setButtonSelect({ title: response.title, description: response.description, answers: response.answers })
        }
    });

  };

  const onClickSuggestion = (i: number) => {
    const suggestion = suggestions[i].answer;
    setSuggestions([])
    socket.volatile.emit('update_item', activeKey, suggestions[i].key, (response: IResponse & IButtonSelect) => {
      let updated = [
        ...messages,
        { response: suggestion, author: 'Sintija' }
      ];
      setId(response.id);
      if (activeKey === "listening_init") {
        dispatch(addSound({ connection: "open", ...email && { user_email: email } }))
      }
      updated = getQuestions(updated, response);
      setMessages(updated);
      if (response.suggestions) {
        setSuggestions(response.suggestions);
      }
      setActiveKey(response.activeKey);
      if (response.type === "button_select") {
        setButtonSelect({ title: response.title, description: response.description, answers: response.answers })
      }
    });
  }

  const onOptionSelect = (key: string) => {
    const res = buttonSelect?.answers.find(btn => btn.key === key)!;
    let updated = [
      ...messages,
      { response: res.answer, author: 'Sintija' }
    ];
    // activeKey || res.key - activeKey is next predictable question and res.key is for the dynamic path
    socket.volatile.emit('update_item', activeKey || res.key, res.key, (response: IResponse & IButtonSelect) => {
      dispatch(addSound({ [id as string]: res.key }))
      setActiveKey(response.activeKey);
      setId(response.id);
      if (response.type) {
        setType(response.type as "open" | "technical");
      }
      updated = getQuestions(updated, response);
        if (response.suggestions) {
          setSuggestions(response.suggestions);
        }
        setMessages(updated);
        setButtonSelect(undefined)
        if (response.type === "button_select") {
          setButtonSelect({ title: response.title, description: response.description, answers: response.answers })
        }
    });

    
  }
  const conversation = {
    title: 'What are you listening now?',
    category: 'Discovery & Analytics',
    time: '1 min',
    image: <LipsIcon h="2.5rem" w="2.5rem" p=".3rem" borderRadius="50%" border="1px" mr=".75rem" />,
    isActive: true
  };
  return (<>
    <AIAssistantChat onClickSuggestion={onClickSuggestion} suggestions={suggestions} history={messages} onSubmit={(data) => onSubmit(data as string)} image={<LipsIcon h="2rem" w="2rem" p=".3rem" borderRadius="50%" m="0 .5rem 0 2rem" border="1px" />} conversations={[conversation]} author={""} title={"What are you listening now?"}>
      {buttonSelect && <Box m="1rem 0 1rem 5rem"><ButtonList title={buttonSelect.title} description={buttonSelect?.description} answers={buttonSelect.answers} onClick={onOptionSelect} /></Box>}
    </AIAssistantChat>
  </>)
}