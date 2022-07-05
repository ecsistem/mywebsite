import { gql, useQuery } from "@apollo/client";
import { CardCertification } from "../CardCertification";
import { CertificationProps } from "../../interface/certification";
import { GET_CERTIFICATIONS } from "../../constants/gql";

export function Certification() {
  const { loading, error, data } = useQuery<{ certifications: CertificationProps[] }>(GET_CERTIFICATIONS);
  if (loading) return (
    <h1>Carregando Certificados...</h1>
  )
  if (error) return <p>Error ao buscar Certificados:(</p>;
  return (
    <aside className="w-full md:w-[348px] p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 text-center text-blue-700 block">
        Certificados
      </span>

      <div className="flex flex-col gap-8">
      {data?.certifications.map((certification) => {
            return <h1 className="text-white text-center">{certification.name}</h1>;
            // <CardCertification
            //   key={certification.id}
            //   title={lesson.title}
            //   slug={lesson.slug}
            //   availableAt={new Date(lesson.availableAt)}
            //   lessonType={lesson.lessonType} id={""}            
            //   />;
          })}
      </div>
    </aside>
  );
}
