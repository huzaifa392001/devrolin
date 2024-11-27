import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { data } from "@/components/Work/data";
import s from "@/components/Work/work.module.scss";

interface WorkPageProps {
  work: {
    id: number;
    name: string;
  };
}

const WorkPage = ({ work }: WorkPageProps) => {
  const router = useRouter();
  const { id } = router.query;

  if (!work) return <div>Loading...</div>;

  return (
    <div className={s.workPage}>
      <h1>{work.name}</h1>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const work = data.find((item) => item.id === parseInt(id as string, 10));

  return {
    props: {
      work: work || null,
    },
  };
};

export default WorkPage;
