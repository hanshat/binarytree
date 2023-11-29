import { Input } from "antd";
import style from "./FloatingSearchBar.module.scss";
import useUserAgent from "hooks/useUserAgent";
import useModal from "hooks/useModal";
import { Icon } from "components/General";

interface FloatingSearchBarProps {
	styles?: React.CSSProperties;
}

const FloatingSearchBar: React.FC<FloatingSearchBarProps> = ({ styles }) => {
	const os = useUserAgent();
	const addonCommand = os === "win" ? "ctrl + k" : "⌘ K";

	const { handleModalOpen } = useModal();

	return (
		<Input
			style={styles}
			addonBefore={<Icon name="Search" />}
			addonAfter={<>{addonCommand}</>}
			placeholder="Search..."
			value={""}
			onChange={handleModalOpen}
			className={style.fsb__input}
			onClick={handleModalOpen}
		/>
	);
};

export default FloatingSearchBar;
