import { useRouter } from 'next/router';
import Link from 'next/link';
import { FC } from 'react';
import dashboard from '@/pages/dashboard';

const Breadcrumb: FC = () => {
  const router = useRouter();

  const pathTranslations: { [key: string]: string } = {
    home: 'خانه',
    products: 'محصولات',
    shopcart: 'سبد خرید',
    articles: 'مقالات',
    dashboard: 'حساب کاربری',
    'product-details': 'جزئیات محصول',
  };

  // ]get path and split them
  const pathArray = router.asPath.split('/').filter((path) => path);

  return (
    <nav aria-label="breadcrumb" className="text-md text-black mb-4">
      <ol className="flex px-5 items-center space-x-2 mt-8 mb-2">
        <li>
          <Link href="/">
            {pathTranslations['home']}
          </Link>
        </li>
        {pathArray.map((path, index) => {
          const href = '/' + pathArray.slice(0, index + 1).join('/');

          // last path
          const isLast = index === pathArray.length - 1;

          // use persian neme path if exist
          const translatedPath = pathTranslations[path] || decodeURIComponent(path);

          return (
            <li key={href} className="flex items-center text-main-color">
              <span className="mx-2"><i className='bi bi-chevron-left text-black text-sm'></i></span>
              {isLast ? (
                <span className="text-gray-500">{translatedPath}</span>
              ) : (
                <Link href={href}>
                  {translatedPath}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
