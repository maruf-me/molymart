import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const useModifyParams = (key: string) => {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const add = (id: string, page = 1) => {
    const values: string[] = searchParams.getAll(key);
    const params = new URLSearchParams();

    values.forEach((value) => {
      params.append(key, value);
    });

    const isExist = values.includes(id);
    if (!isExist) {
      params.append(key, id);
    }

    replace(`${pathname}?${params.toString()}&page=${page}`, { scroll: false });
  };

  const remove = (id: string, page = 1) => {
    const values = searchParams.getAll(key).filter((value) => value !== id);

    const params = new URLSearchParams();

    params.delete(key);
    values.forEach((value) => {
      params.append(key, value);
    });

    replace(`${pathname}?${params.toString()}&page=${page}`, { scroll: false });
  };

  return { add, remove };
};
