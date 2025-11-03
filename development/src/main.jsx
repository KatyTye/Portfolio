import { BrowserRouter, Route, Routes } from 'react-router'
import { createRoot } from 'react-dom/client'
import Projects from './pages/Projects.jsx'
import Layout from './pages/Layout.jsx'
import About from './pages/About.jsx'
import Error from './pages/Error.jsx'
import Index from './pages/Index.jsx'
import { StrictMode } from 'react'
import "./styles/main.sass"

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Index />} />
					<Route path="*" element={<Error />} />
					<Route path="/about" element={<About />} />
					<Route path="/projects" element={<Projects />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>,
)
