import { sayHello } from '@your-org/core-lib';
import { AsyncMessage, Message } from '@your-org/ui-lib';
import { InfoCard } from '@your-org/ui-lib/component/info-card';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import { MainLayout } from '@/components/layout/main-layout';

export default function Home() {
  return (
    <>
      <NextSeo
        title="[web-app] nextjs-monorepo example"
        description="See https://github.com/belgattitude/nextjs-monorepo-example"
      />
      <MainLayout>
        <h3>I'm the web-app</h3>
        <ul>
          <InfoCard originatingAppName={'web-app'} />
          <li>{`Foo says: ${sayHello('World')} from @your-org/core-lib`}</li>
          <li>
            <Message message={'Bar react component from @your-org/ui-lib'} />
          </li>
          <li>
            <AsyncMessage apiUrl={'/api/hello'} />
          </li>
        </ul>
        <Image
          src={'/shared-assets/images/nextjs-logo.png'}
          alt={'logo'}
          width={400}
          height={240}
        />
      </MainLayout>
    </>
  );
}
