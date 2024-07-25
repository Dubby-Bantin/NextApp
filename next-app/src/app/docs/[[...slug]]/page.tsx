const Docs = ({ params: { slug } }: { params: { slug: string[] } }) => {
  return (
    <>
      {slug?.length === 2 ? (
        <h1>
          Viewing docs for features {slug[0]} and concept {slug[1]}
        </h1>
      ) : (
        slug?.length === 1 && <h1>Viewing docs for feature {slug[0]}</h1>
      )}

      <h1>Docs home Page</h1>
    </>
  );
};

export default Docs;
