import { MainPage } from '/src/pages/MainPage';
import { PageAnimation } from '/src/shared/UI/PageAnimation/PageAnimation';

export default function Home() {
  return (
    <>
      <PageAnimation>
        <MainPage />
      </PageAnimation>
    </>
  );
}
