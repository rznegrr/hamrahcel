import React, { useState } from "react";
import ProductCard from "@/features/products/ProductCard";
import AppLayout from "@/layouts/AppLayout";
import HeadTitle from "@/ui/HeadTitle";
import Breadcrumb from "@/ui/BreadCrumb";
import FilteredProductSideBar from "@/features/products/FilteredProductSideBar";
import { useProducts } from "@/features/products/useProducts";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter } from "next/router";

function ProductPage() {
  const [showFilterProducts, setShowFilterProducts] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  
  const page = router.query.page;
  console.log(page);
  
  
  const { isLoading, products } = useProducts(page);
  const toggleMenu = () => setIsOpen(!isOpen);
  
  if (isLoading) return null;

  return (
    <AppLayout>
      <HeadTitle title="محصولات" meta="محصولات همراه سل" />
      <Breadcrumb />
      <div className="grid grid-cols-12 mb-20">
        {/* filter side bar */}

        {showFilterProducts && (
          <div className="fixed inset-0 bg-[#1c1c1ce1] opacity-50 lg:hidden"></div>
        )}
        <FilteredProductSideBar
          onOpen={showFilterProducts}
          onClose={() => setShowFilterProducts(false)}
        />

        {/* product list */}
        <div className="col-span-12 lg:col-span-9 grid lg:px-5">
          <div className="col-span-12 bg-sec-color p-5 text-sm mb-5 rounded-md relative">
            <div className="flex gap-4">
              <button
                onClick={() => setShowFilterProducts(true)}
                className="lg:hidden"
              >
                <i className="bi bi-filter-right text-xl"></i>فیلتر محصولات
              </button>
              <button onClick={toggleMenu} onMouseEnter={() => setIsOpen(true)}>
                <i className="bi bi-card-checklist pl-1"></i> ترتیب بر اساس :
              </button>
              <button className="text-main-color text-xs lg:text-sm lg:hidden">
                پرفروش ترین
              </button>

              <div className="hidden lg:flex gap-5">
                <button className="text-main-color text-xs lg:text-sm">
                  پرفروش ترین
                </button>
                <button className="text-xs lg:text-sm">جدید ترین</button>
                <button className="text-xs lg:text-sm">ارزان ترین</button>
                <button className="text-xs lg:text-sm">گران ترین</button>
                <button className="text-xs lg:text-sm">
                  بیشترین امتیاز همراه سل
                </button>
              </div>
              {isOpen && (
                <div className="bg-[#f7f7f7] h-44 w-44 absolute top-14 right-36 lg:hidden rounded-md p-5">
                  <div className="flex flex-col items-start gap-3">
                    <button className="text-main-color text-xs lg:text-sm">
                      پرفروش ترین
                    </button>
                    <button className="text-xs lg:text-sm">جدید ترین</button>
                    <button className="text-xs lg:text-sm">ارزان ترین</button>
                    <button className="text-xs lg:text-sm">گران ترین</button>
                    <button className="text-xs lg:text-sm">
                      بیشترین امتیاز همراه سل
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 col-span-12 place-items-center">
            {products.results.map((product: any) => (
              <ProductCard
                className="bg-white"
                product={product}
                key={product.id}
              />
            ))}
          </div>
          <div className="col-span-12 mt-5">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href={`/products/page/${page - 1}`} />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href={`/products/page/${+page + 1}`} />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default ProductPage;
