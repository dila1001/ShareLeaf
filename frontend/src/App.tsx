import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import PlantsPage from './pages/Plants';
import PlantPage from './pages/Plant';
import EditPlant from './pages/EditPlant';
import AuthProvider from './auth/AuthProvider';
import { AuthGuard, LoginGuard } from './auth/Guards';
import Login from './pages/Login';
import HouseholdsPage from './pages/Households';
import Drawer from './components/Drawer';

function App() {
	const location = useLocation();

	const isLoginPage = location.pathname === '/login';

	return (
		<AuthProvider>
			<Drawer>
				{!isLoginPage && <Navbar />}
				<Routes>
					<Route element={<LoginGuard />}>
						<Route path='/login' element={<Login />}></Route>
					</Route>
					<Route element={<AuthGuard />}>
						<Route path='/' element={<HouseholdsPage />}></Route>
						<Route path='/:householdId/plants' element={<PlantsPage />}></Route>
						<Route
							path='/:householdId/plants/edit-plant'
							element={<EditPlant />}
						></Route>
						<Route
							path='/:householdId/plants/:plantId'
							element={<PlantPage />}
						></Route>
					</Route>
				</Routes>
			</Drawer>
		</AuthProvider>
	);
}

export default App;
