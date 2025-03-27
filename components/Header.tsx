import React from 'react'
import ModeToggle from "@/components/ModeToggle";

const Header = () => {
	return (
		<div className="flex flex-row  w-full h-2">
			<div className="flex flex-row w-3/4 ">
				mode
			</div>
			<div className="flex flex-row justify-end w-1/4">
				<ModeToggle />
			</div>
		</div>
	)
}
export default Header
