// @refresh reload
// import { I18nProvider, useI18n } from '@amoutonbrady/solid-i18n';
import { HopeProvider } from '@hope-ui/solid'
import { App } from './app'
import {
  Body,
  Head,
  Html,
  Meta,
  Title,
} from "solid-start";
import "./root.css";

export default function Root() {
  return (
    <Html lang="en">
        <Head>
        <Title>SolidStart - Bare123</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Body>
        <HopeProvider>
          <App />
        </HopeProvider>
        </Body>
    </Html>
  );
}
