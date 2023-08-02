import { createTheme	} from '@mui/material'
import { cyan, yellow } from '@mui/material/colors';


export const DarkTheme = createTheme({
	palette: {
		primary: {
			main: yellow[700],
			light: yellow[800],
			dark: yellow[500],
			contrastText: '#fffff',
		},
		secondary: {
			main: cyan[700],
			light: cyan[800],
			dark: cyan[500],
			contrastText: '#fffff',
		},
		background: {
			default: '#303134',
			paper: '#202124',
		},
	},
});