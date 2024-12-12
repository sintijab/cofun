import { Box, Flex, FlexProps, useClipboard } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { BellIcon, ShareIcon, TextBase } from "../../foundations";
import { ModalBase } from "../../components";
import { InputBase } from "@co-fun/ui";

export const Project = ({ title, description, isEndorsed, formId, children, ...props }: { title: string; description: string, formId?: string, isEndorsed: boolean } & FlexProps) => {
  const { onCopy, value, setValue: setClipboard, hasCopied } = useClipboard('')
  const { register, setValue } = useForm();
  const subscribe = <BellIcon cursor="pointer" />;
  const signUp = (
    <form action={formId} method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
      <div id="mc_embed_signup_scroll">
        <div className="mc-field-group">
        <InputBase {...register("EMAIL")} placeholder="Email address" variant="unstyled" required={true} id="mce-EMAIL" padding=".5rem!important" border="1px" borderColor="chat.authorBg!important" size="lg" focusBorderColor='chat.authorBg!important' borderRadius="2rem!important" _placeholder={{ color: 'chat.authorBg!important', fontFamily: '"Jost", sans-serif;!important' }} _focus={{ border: '2px!important', borderColor: 'navigation.dark!important'}} /></div>
        <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px'}}>
        /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */
          <input type="text" tabIndex={-1} {...register("b_afdf41c218cb20406a176006b_5656180439")} />
        </div>
          <div className="clear foot subscribe-section">
            <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Sign up" />
              <p style={{margin: '0px auto'}}><a href="http://eepurl.com/i53tms" title="Mailchimp - email marketing made easy and fun"><span style={{ display: 'inline-block', backgroundColor: 'transparent', borderRadius: '4px'}}><img className="refferal_badge" src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" alt="Intuit Mailchimp" style={{width: '220px', height: '40px', padding: '2px 0px', justifyContent: 'center', alignItems: 'center'}} /></span></a></p>
          </div>
      </div>
      <div hidden={true}><input type="hidden" name="tags" value="11843563" /></div>
      <div id="mce-responses" className="clear foot">
          <div className="response" id="mce-error-response" style={{display: 'none'}}></div>
          <div className="response" id="mce-success-response" style={{display: 'none'}}></div>
        </div>
    </form>
  )
  return (
    <Box p="1.875rem 2.063rem" border="1px" borderColor="border.default" borderRadius="lg" {...props}>
      <Box display="flex" pb="1.125rem" justifyContent="space-between">
        <Box>
          <Flex alignItems="center" pb="0.75rem">
            <TextBase textStyle="project-title">{title}</TextBase>
          </Flex>
          <TextBase textStyle="project-descr" mb="1rem">{description}</TextBase>
        </Box>
        <Flex direction="column" justifyContent="space-between" alignItems="flex-end" pl="1rem">
          {formId && <ModalBase content={signUp} title={'Subscribe'} button={subscribe} />}
          {!formId && subscribe}
          <Flex>
            {!hasCopied && <ShareIcon cursor="pointer" onClick={() => { setClipboard('https://co-fun.com/trends'); onCopy() }} />}
            {hasCopied && <TextBase fontFamily="gingerBold">Link copied</TextBase>}
          </Flex>
        </Flex>
      </Box>
      {children}
    </Box>
  )
}