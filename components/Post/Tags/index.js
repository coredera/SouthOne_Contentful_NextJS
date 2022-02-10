import TagsStyles from "@styles/Tags.module.css";
import { Config } from "@utils/Config";
import Link from "next/link";

export default function Tags(props) {
  const { tags } = props;

  return (
    <ul className={TagsStyles.tags}>
      {tags.map((tag) => (
        <Link href={`/topic/${tag.id}`}>
          <a>
            <li className={TagsStyles.tags__tag} key={tag.id}>
              {tag.id}
            </li>
          </a>
        </Link>
      ))}
    </ul>
  );
}
