'use client';

import { Box, ChatSingleIcon, CoFunUiProvider, Flex, Footer, NavigationTop } from '@co-fun/ui';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { GlobalStyles } from '../providers/GlobalStyles';
import { store, persistor } from '../store';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const router = useRouter();
  const isFullLayout = router.asPath.includes('/explore') || router.asPath.includes('/academy') || router.asPath === '/' || router.asPath.includes('/#');
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <CoFunUiProvider>
          <GlobalStyles />
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </Head>
          {router.asPath !== '/explore' && <NavigationTop links={[
            {
              label: 'Creators',
              href: '/explore'
            },
            {
              label: 'Startups',
              href: '/funding'
            },
            {
              label: 'Features',
              href: '/features'
            },
            {
              label: 'Pricing',
              href: '/#pricing'
            },
            {
              label: 'Contact',
              href: '/contact',
            }
          ]} />}
          {!isFullLayout && <Flex direction="column" margin={["3rem .5rem", "5rem 10rem", "5rem 20rem"]} flexWrap="wrap">
            <Component {...pageProps} />
          </Flex>}
          {isFullLayout &&
            <Component {...pageProps} />
          }
          <Box m="1rem" position="relative" height="max-content">
            <Footer {
              ...{
                columns: [
                  {
                    title: 'Use cases',
                    links: [
                      {
                        label: 'AI assistance',
                        href: '/assistance'
                      },
                      {
                        label: 'Content optimization',
                        href: '/optimization'
                      },
                      {
                        label: 'Content generation',
                        href: '/generation'
                      },
                      {
                        label: 'Initiatives',
                        href: '/initiatives'
                      },
                      {
                        label: 'Action analysis',
                        href: '/analysis'
                      },
                      {
                        label: 'Projects',
                        href: '/projects'
                      },
                      {
                        label: 'Team collaboration',
                        href: '/collaboration'
                      }
                    ]
                  },
                  {
                    title: 'Explore',
                    links: [
                      {
                        label: 'Academy',
                        href: '/academy'
                      },
                      {
                        label: 'Integrations',
                        href: '/integrations'
                      },
                      {
                        label: 'Funding',
                        href: '/funding'
                      },
                      {
                        label: 'Development features',
                        href: '/development'
                      },
                      {
                        label: 'Form creation',
                        href: '/forms'
                      },
                      {
                        label: 'Collaboration features',
                        href: '/collaboration'
                      },
                      {
                        label: 'Design process',
                        href: '/features'
                      }
                    ]
                  },
                  {
                    title: 'Resources',
                    links: [
                      {
                        label: 'Analytics',
                        href: '/analytics'
                      },
                      {
                        label: 'Community',
                        href: '/community'
                      },
                      {
                        label: 'Events',
                        href: '/events'
                      },
                      {
                        label: 'Blog',
                        href: '/academy'
                      },
                      {
                        label: 'Support',
                        href: '/support'
                      },
                      {
                        label: 'Developers',
                        href: '/developers'
                      },
                      {
                        label: 'Reource library',
                        href: '/resources'
                      }
                    ]
                  }
                ],
              }
            } />
          </Box>
        </CoFunUiProvider>
      </PersistGate>
    </Provider>
  );
}
