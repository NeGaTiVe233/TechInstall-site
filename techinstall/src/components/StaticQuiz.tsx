import React from 'react';
import Link from "next/link";
export default function Quiz() {
	return (
		<div
			style={{
				width: "100%",
				height: "46rem", // По умолчанию
				position: "relative",

			}}
		>
			{/* Фон с размытием */}
			<div
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					backgroundImage: "url('/Images/tv.jpg')",
					backgroundPosition: "center -10vh",
					backgroundSize: "cover",
					backgroundAttachment: "fixed",
					zIndex: 1.5,
				}}
			/>

			{/* Белый прозрачный слой */}
			<div
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					backgroundColor: "rgba(255, 255, 255, 0.4)",
					zIndex: 2,
				}}
			/>
<div style={{marginTop:"4rem"}}>
	<div
		style={{
			position: "absolute",
			marginTop: "4vh",
			top: "9vh",
			left: "50%",
			transform: "translate(-50%, -50%)",
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			textAlign: "center",
			color: "black",
			fontWeight: "700",
			fontSize: "55px",
			zIndex: 2,
			...(typeof window !== "undefined" && window.innerWidth < 768
				? { marginTop: "8vh" } // Увеличенный отступ
				: {}),
		}}
	>
		<h1 className={"display-4"}>TechInstall</h1>
	</div>

	{/* Описание */}
	<div
		className="desc"
		style={{
			position: "absolute",
			top: "27vh",
			left: "50%",
			transform: "translate(-50%, -50%)",
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			textAlign: "center",
			color: "black",
			fontSize: "30px",
			zIndex: 2,
			marginTop: '40px'
		}}
	>
		<h3 className={"h2-text  display-6"}>
			Пройдите <strong>небольшой</strong> квиз <br />
			и получите <strong>3000₽</strong> в качестве <strong>вознаграждения</strong>.
		</h3>
	</div>

	<div
		style={{
			position: "absolute",
			top: "39vh",
			left: "50%",
			transform: "translate(-50%, -50%)",
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			textAlign: "center",
			color: "black",
			fontSize: "18px",
			zIndex: 2,
			fontWeight: "700",
		}}
	>
		<p style={{ marginTop: "20vh",marginBottom: "4vh" }}>
			Ваши устройства — в надежных руках
		</p>
	</div>

	<div
		style={{
			position: "absolute",
			top: "47vh",
			left: "50%",
			transform: "translate(-50%, -50%)",
			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			textAlign: "center",
			zIndex: "2",
			marginTop: '50px'

		}}
	>
		<Link href={"/quiz"} style={{textDecoration:"none",color:"black"}}>
			<div className="d-flex justify-content-center align-items-center mt-16">
				<button className="mt-6 btn  btn-lg rounded- py-4 px-5 shadow-sm hover-zoom text-nowrap "  style={{marginTop:"7vh",backgroundColor:"rgba(252,178,11,0.85)"}} >
					<h1>Пройти квиз</h1>
				</button>
			</div>
		</Link>
	</div>
</div>
			{/* Заголовок */}
		</div>
	);
}
