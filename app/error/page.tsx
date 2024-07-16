import Link from "next/link";

const ErrorPage = () => {
  return (
    <div>
      <p>Sorry, something went wrong</p>
      <Link href="/">Top pageに戻る</Link>
    </div>
  );
};

export default ErrorPage;
