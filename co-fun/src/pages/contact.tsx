import { Flex, InputBase, Textarea, TextBase } from "@co-fun/ui";
import { useForm } from "react-hook-form";

export default function Index() {
  const {
    register,
  } = useForm()
  return (
    <>
      <Flex alignItems="center" flexDirection="column" maxWidth="100%">
        <TextBase textStyle="heading" lineHeight="2" alignSelf="center" mt="2rem">
          Contact Us
        </TextBase>
        <div id="mc_embed_shell">
          <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
          <div id="mc_embed_signup">
            <form
              action="https://co-fun.us9.list-manage.com/subscribe/post?u=afdf41c218cb20406a176006b&amp;id=5656180439&amp;f_id=00aa56e1f0"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
            >
              <div id="mc_embed_signup_scroll" className="contact">
                <div className="mc-field-group mc-field-group-contact">
                  <div className="mc-field-group"><label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label>
                    <InputBase padding=".5rem!important" border="1px" borderColor="chat.authorBg!important" size="lg" focusBorderColor='chat.authorBg!important' borderRadius="2rem!important" _placeholder={{ color: 'chat.authorBg!important', fontFamily: '"Jost", sans-serif;!important' }} _focus={{ border: '2px!important', borderColor: 'navigation.dark!important' }} type="email" {...register("EMAIL")} className="required email" id="mce-EMAIL" required={true} />
                  </div>
                  <div className="mc-field-group">
                    <label htmlFor="mce-MESSAGE">Message </label>
                    <Textarea height="100px" padding=".5rem!important" border="1px" borderColor="chat.authorBg!important" size="lg" focusBorderColor='chat.authorBg!important' borderRadius="1.5rem!important" _placeholder={{ color: 'chat.authorBg!important', fontFamily: '"Jost", sans-serif;!important' }} _focus={{ border: '2px!important', borderColor: 'navigation.dark!important' }} {...register("MESSAGE")} className="text" id="mce-MESSAGE" />
                  </div>
                </div>
                <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
              /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */
                  <input type="text" tabIndex={-1} {...register("b_afdf41c218cb20406a176006b_5656180439")} />
                </div>
                <div className="contact-btn">
                  <div hidden={true}><input type="hidden" name="tags" value="11843567" /></div>
                  <div className="clear foot">
                    <input type="submit" {...register("subscribe")} id="mc-embedded-subscribe" className="button" value="Submit" />
                    <p style={{ margin: '0px auto' }}><a href="http://eepurl.com/i53tms" title="Mailchimp - email marketing made easy and fun"><span style={{ display: 'inline-block', backgroundColor: 'transparent', borderRadius: '4px' }}><img className="refferal_badge" src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" alt="Intuit Mailchimp" style={{ width: '220px', height: '40px', display: 'flex', padding: '2px 0px', justifyContent: 'center', alignItems: 'center' }} /></span></a></p>
                  </div>
                </div>
              </div>
              <div id="mce-responses" className="clear foot">
                <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
                <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
              </div>
            </form>
          </div>
        </div>
      </Flex>
    </>
  );
}
