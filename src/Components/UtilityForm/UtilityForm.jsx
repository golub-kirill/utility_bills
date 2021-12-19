import React from "react";
import css from "./UtilityForm.module.css";
import StyledInput from "../UI/StyledInput/StyledInput";
import StyledButton from "../UI/StyledButton/StyledButton";

export default function UtilityForm() {
	const [utility, setUtility] = React.useState({
		coldWater: "",
		hotWater: "",
		heating: "",
		electricity: "",
		gas: "",
		sewage: "",
		garbage: "",
	});

	const [currentDate] = React.useState(() => {
		return new Intl.DateTimeFormat("ru-Ru", {
			month: "long",
			year: "numeric",
		})
			.format(new Date())
			.slice(0, -3);
	});

	const saveBills = () => {
		const date = new Date().getFullYear() + new Date().getMonth();
		localStorage.setItem(date, JSON.stringify({ ...utility, date: currentDate }));
	}

	return (
		<div className={css.form__wrapper}>
				<form className={css.utilityForm}>
			<h2 className={css.form__header}>{currentDate}</h2>
			<StyledInput
				placeholder="Холодная вода"
				value={utility.coldWater}
				onChange={(e) =>
					setUtility({ ...utility, coldWater: e.target.value })
				}
			/>
			<StyledInput
				placeholder="Горячая вода"
				value={utility.hotWater}
				onChange={(e) =>
					setUtility({ ...utility, hotWater: e.target.value })
				}
			/>
			<StyledInput
				placeholder="Отопление"
				value={utility.heating}
				onChange={(e) =>
					setUtility({ ...utility, heating: e.target.value })
				}
			/>
			<StyledInput
				placeholder="Электроэнергия"
				value={utility.electricity}
				onChange={(e) =>
					setUtility({ ...utility, electricity: e.target.value })
				}
			/>
			<StyledInput
				placeholder="Газ"
				value={utility.gas}
				onChange={(e) =>
					setUtility({ ...utility, gas: e.target.value })
				}
			/>
			<StyledInput
				placeholder="Водоотведение"
				value={utility.sewage}
				onChange={(e) =>
					setUtility({ ...utility, sewage: e.target.value })
				}
			/>
			<StyledInput
				placeholder="Мусор"
				value={utility.garbage}
				onChange={(e) =>
					setUtility({ ...utility, garbage: e.target.value })
				}
			/>
			<StyledButton onClick={() => saveBills()}>✓</StyledButton>
		</form>
		</div>
	);
		
	
}