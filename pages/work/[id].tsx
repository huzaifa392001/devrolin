// pages/work/[id].tsx

import { GetServerSideProps } from "next";
import { data as workData } from "@/components/Work/data"; // Ensure the path is correct
import s from "@/components/Work/work.module.scss";
import Bauhas from "./bauhas";
import Everphone from "./everphone";
import Monipol from "./monipol";
import Myndyoga from "./myndyoga";
import Vermietet from "./vermietet";
import WWTF from "./wwtf";

interface Data {
  id: number;
  name: string;
  desc: string[];
  color: string;
}

interface WorkPageProps {
  work: Data | null; // Use the Data type here
}

const workComponentsMap: Record<number, JSX.Element> = {
  0: <Bauhas />, // Ensure to import your components for each ID
  1: <Everphone />,
  2: <Monipol />,
  3: <Myndyoga />,
  4: <Vermietet />,
  5: <WWTF />,
};

const WorkPage = ({ work }: WorkPageProps) => {
  if (!work) return <div>Project not found</div>;

  return (
    <div className={s.workPage} style={{ backgroundColor: work.color }}>
      <h1>{work.name}</h1>
      <ul>
        {work.desc.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {/* Render the specific work component based on ID */}
      {workComponentsMap[work.id]}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const workId = parseInt(id as string, 10);

  // Fetch the corresponding work data by ID
  const work = workData.find((item) => item.id === workId) || null;

  // If the ID is not valid, return a not found page
  if (!work) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      work,
    },
  };
};

export default WorkPage;
