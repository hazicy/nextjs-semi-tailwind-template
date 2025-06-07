'use client';

import { Button, Card, Typography, Space } from '@douyinfe/semi-ui';
import { IconGithubLogo, IconStar } from '@douyinfe/semi-icons';

const { Title, Paragraph } = Typography;

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <Title heading={1} className="!mb-6 !text-5xl !font-bold">
            Next.js + Semi Design + Tailwind
          </Title>
          <Paragraph className="mx-auto max-w-2xl text-xl text-gray-600">
            一个现代化的全栈 React 开发模板，集成了最佳的开发工具和 UI 组件库。
          </Paragraph>
        </div>

        <div className="mb-12 grid gap-6 md:grid-cols-3">
          <Card className="p-6 text-center transition-shadow hover:shadow-lg">
            <div className="mb-4 text-3xl">⚡</div>
            <Title heading={4} className="!mb-3">
              Next.js 14
            </Title>
            <Paragraph type="tertiary">
              最新的 React 全栈框架，支持 App Router 和服务端渲染
            </Paragraph>
          </Card>

          <Card className="p-6 text-center transition-shadow hover:shadow-lg">
            <div className="mb-4 text-3xl">🎨</div>
            <Title heading={4} className="!mb-3">
              Semi Design
            </Title>
            <Paragraph type="tertiary">
              现代化的企业级 UI 设计语言和 React 组件库
            </Paragraph>
          </Card>

          <Card className="p-6 text-center transition-shadow hover:shadow-lg">
            <div className="mb-4 text-3xl">🌊</div>
            <Title heading={4} className="!mb-3">
              Tailwind CSS
            </Title>
            <Paragraph type="tertiary">
              实用优先的 CSS 框架，快速构建现代化界面
            </Paragraph>
          </Card>
        </div>

        <div className="text-center">
          <Space>
            <Button
              theme="solid"
              type="primary"
              size="large"
              icon={<IconGithubLogo />}
              onClick={() =>
                window.open(
                  'https://github.com/hazicy/nextjs-semi-tailwind-template'
                )
              }
            >
              查看源码
            </Button>
            <Button
              theme="borderless"
              type="tertiary"
              size="large"
              icon={<IconStar />}
              onClick={() =>
                window.open(
                  'https://github.com/hazicy/nextjs-semi-tailwind-template'
                )
              }
            >
              Star 支持
            </Button>
          </Space>
        </div>
      </div>
    </main>
  );
}
