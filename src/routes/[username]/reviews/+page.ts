import { fetchAllAnimeCollections } from "$lib/api/bgm-api-fetcher";
import type { PresentedSubject } from "$lib/schemas/presented-subject";
import { isNil } from "es-toolkit";
import type { PageLoad } from "./$types";


export const load: PageLoad = async ({ params }) => {
  const { username } = params;
  
  const subjects = await fetchAllAnimeCollections(username);

  const presentedSubjects: PresentedSubject[] = subjects.flatMap(
    (collectedSubject) => {
      if (!isNil(collectedSubject.comment) && collectedSubject.comment.trim() !== "") {
        return [{
          name: collectedSubject?.subject?.name ?? collectedSubject?.subject?.name_cn ?? "",
          release_time: collectedSubject?.subject?.date ?? "",
          completion_time: collectedSubject.updated_at,
          comment: collectedSubject.comment,
          rating: collectedSubject.rate,
          tags: collectedSubject.tags,
        }];
      } else {
        return [];
      }
    }
  );

  return { presentedSubjects };

}