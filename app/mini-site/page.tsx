import { redirect } from "next/navigation";

/**
 * /mini-site sem slug → redireciona para o diretório de mini sites.
 * As páginas individuais ficam em /mini-site/[slug].
 */
export default function MiniSiteIndexPage() {
  redirect("/directory");
}
