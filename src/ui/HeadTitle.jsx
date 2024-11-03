import Head from "next/head";

const HeadTitle = (props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.meta} />
    </Head>
  );
};

export default HeadTitle;
