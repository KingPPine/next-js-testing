'use client';

export default function TestAPI() {
	const callAPI = async () => {
        try {
            const res = await fetch('http://localhost:8080/helloworld');
            const data = await res.json();
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };

	return (
		<div>
			<main>
				<button onClick={callAPI}>Make API call</button>
			</main>
		</div>
	);
}