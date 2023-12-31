import { Routes, Route, Navigate } from "react-router-dom";
import { useAppThemeContext } from "../shared/contexts";
import { Button } from "@mui/material";

export const AppRoutes = () => {
	const { themeName, toggleTheme } = useAppThemeContext()
 return (
		<Routes>
			<Route path="/pagina-inicial" element={<Button variant="contained" color="primary" onClick={toggleTheme} >Change Theme</Button>}/>
			<Route path="*" element={<Navigate to="/pagina-inicial" />}/>

		</Routes>
	)
};