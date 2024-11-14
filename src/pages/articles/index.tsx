import Link from "next/link";

import articles from "../../data/articles.json";

import Button from "@/ui/Button";
import Applayout from "@/layouts/AppLayout";
import HeadTitle from "@/ui/HeadTitle";

function articlePage() {
  return (
    <>
    <HeadTitle title=" همراه سل | مقالات" meta="مقالات همراه سل"/>
    <Applayout>
      <div className="mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6">مقالات</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {articles.map((article) => (
            <div
              key={article.id}
              className="border border-border-color rounded-lg shadow-md"
            >
              <img
                src={article.image}
                className="w-[370px] h-[200px] object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2 truncate text-black">
                  {article.title}
                </h2>
                <p className="text-black text-sm mb-4 line-clamp-3 leading-loose">
                  {article.summary}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray">{article.date}</span>
                  <Link href={`/articles/${article.id}`}>
                    <Button
                      buttonIcon=""
                      buttonName="بیشتر بخوانید"
                      className="text-main-color border border-border-color hover:text-white hover:bg-main-color transition-all duration-300"
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Applayout>
    </>
  );
}

export default articlePage;
