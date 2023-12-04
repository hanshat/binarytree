import { Resource } from "components/InjectedComponent";
import { ListSearchResults } from "components/ComponentInjector";
import { useFetchList } from "hooks";
import { FC } from "react";

const URL = `./blog.json`;
const QUERY_KEY = "blog";

const Blog: FC = () => {
	const { data, isLoading, isError } = useFetchList(QUERY_KEY, URL);

	return (
		<ListSearchResults
			items={data}
			resourceName={QUERY_KEY}
			itemComponent={Resource}
			isLoading={isLoading}
			isError={isError}
		/>
	);
};

export default Blog;