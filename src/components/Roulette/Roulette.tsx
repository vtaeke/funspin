import { useState } from 'react';

function Roulette() {
	const arr = [2, 3, 7, 8];
	const [value, setValue] = useState<string>('🎰');
	const [isSpinning, setIsSpinning] = useState<boolean>(false);

	const spinBututton = () => {
		if (isSpinning) return;
		setIsSpinning(true);

		const finalIndex = Math.floor(Math.random() * arr.length);
		const finalNumber = arr[finalIndex];

		let delay = 50;

		const spinStep = () => {
			const random = Math.floor(Math.random() * arr.length);
			setValue(arr[random].toString());

			delay += 20;

			if (delay < 600) {
				setTimeout(spinStep, delay);
			} else {
				if (finalNumber === 7) {
					setValue('7 - ты выиграл JACKPOT - 15$ 🎰');
				} else {
					setValue('В следующий раз повезет, твое число ' + finalNumber.toString());
				}
				setIsSpinning(false);
			}
		};
		spinStep();
	};
	return (
		<div>
			<h2>🎰 Рулетка</h2>
			<div>{value}</div>
			<button onClick={spinBututton} disabled={isSpinning}>
				{isSpinning ? 'Крутим' : 'Запустить рулетку'}
			</button>
		</div>
	);
}

export default Roulette;
