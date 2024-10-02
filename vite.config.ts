import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from "path"
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@/assets': resolve(__dirname,'./src/assets'),
			'@/components': resolve(__dirname,'./src/components'),
			"@/pages": resolve(__dirname,'./src/pages'),
			"@/config": resolve(__dirname,'./src/config'),
			"@/routes": resolve(__dirname,'./src/routes'),
			"@/hooks": resolve(__dirname,'./src/hooks'),
			"@/interfaces": resolve(__dirname,'./src/interfaces'),
			"@/types": resolve(__dirname,'./src/types'),
			"@/utils": resolve(__dirname,'./src/utils'),
			"@/store": resolve(__dirname,'./src/store'),
			"@/services": resolve(__dirname,'./src/services'),

		},
	},
})
