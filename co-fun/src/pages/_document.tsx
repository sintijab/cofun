import { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script';

export default function Document() {
  const meta = {
    title: "CO-FUN",
    description: "Recruit AI assistant team for your business in seconds.",
    image: "https://images.prismic.io/syntia/Zvx8DrVsGrYSwQnL_CO-FUN.png?auto=format,compress",
  };

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourname" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Sen:wght@400..800&display=swap" rel="stylesheet" />
        <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script>
        <Script
            id="jquery-custom-script"
            type="text/javascript"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function($) {
                  window.fnames = new Array();
                  window.ftypes = new Array();
                  fnames[0] = 'EMAIL';
                  ftypes[0] = 'email';
                  fnames[1] = 'FNAME';
                  ftypes[1] = 'text';
                  fnames[2] = 'LNAME';
                  ftypes[2] = 'text';
                  fnames[3] = 'ADDRESS';
                  ftypes[3] = 'address';
                  fnames[4] = 'PHONE';
                  ftypes[4] = 'phone';
                  fnames[5] = 'BIRTHDAY';
                  ftypes[5] = 'birthday';
                  fnames[6] = 'COMPANY';
                  ftypes[6] = 'text';
                  fnames[7] = 'MESSAGE';
                  ftypes[7] = 'text';
                }(jQuery));
                var $mcj = jQuery.noConflict(true);
              `,
            }}
          />
          <Script
            id="mailchimp-initialization"
            type="text/javascript"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function($) {
                  window.fnames = new Array();
                  window.ftypes = new Array();
                  fnames[0] = 'EMAIL';
                  ftypes[0] = 'email';
                  fnames[1] = 'FNAME';
                  ftypes[1] = 'text';
                  fnames[2] = 'LNAME';
                  ftypes[2] = 'text';
                  fnames[3] = 'ADDRESS';
                  ftypes[3] = 'address';
                  fnames[4] = 'PHONE';
                  ftypes[4] = 'phone';
                  fnames[5] = 'BIRTHDAY';
                  ftypes[5] = 'birthday';
                  fnames[6] = 'COMPANY';
                  ftypes[6] = 'text';
                  fnames[7] = 'MESSAGE';
                  ftypes[7] = 'text';
                }(jQuery));
                var $mcj = jQuery.noConflict(true);
              `,
            }}
          />
      </Head>
      <body>
        <Main />
        <NextScript />

      </body>
    </Html>
  );
}

