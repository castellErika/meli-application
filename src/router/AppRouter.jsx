import { Routes, Route } from "react-router-dom";

import { SearchPage, ResultsPage, DetailsPage} from "../app/pages";

export const AppRouter = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="items" element={<ResultsPage />} />
      <Route path="items/:id" element={<DetailsPage />} />
    </Routes></>
  )
}
