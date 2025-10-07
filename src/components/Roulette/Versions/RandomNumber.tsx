import {useRef, useState} from 'react';
import '../Roulette.css'
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
function RandomNumber() {
    const arr = [2, 3, 7, 8];

    const navigate = useNavigate();

    const [isSpinning, setIsSpinning] = useState<boolean>(false);
    const [result, setResult] = useState<string | null>(null);
    const reelRef = useRef<HTMLDivElement>(null)

    const [highlightIndex, setHighlightIndex] = useState<number | null>(null);
    const [highlightClass, setHighlightClass] = useState<string>('');

    const cardWidth = 100;
    const containerWidth = 500;
    const repeatedArr = Array(50).fill(arr).flat()

    const spinButton = () => {
        if (isSpinning) return
        setIsSpinning(true);
        setResult(null)
        setHighlightIndex(null)
        setHighlightClass('')

        const finalIndex = Math.floor(Math.random() * arr.length);
        const finalNumber = arr[finalIndex];

        // let step = 0
        // let delay = 50

        const totalSteps = arr.length * 10 + finalIndex
        const translateX = totalSteps * cardWidth - (containerWidth - cardWidth) / 2;

        if (reelRef.current) {
            reelRef.current.style.transition = 'transform 2.5s cubic-bezier(0.33, 1, 0.68, 1)';
            reelRef.current.style.transform = `translateX(-${translateX}px)`;
        }

        setTimeout(() => {
            setHighlightIndex(finalIndex);
            setHighlightClass(finalNumber === 7 ? 'winner' : 'loser');
            setResult(
                finalNumber === 7
                    ? '7 - ты выиграл JACKPOT - 15$ 🎰'
                    : 'В следующий раз повезет, твое число ' + finalNumber
            );
            setIsSpinning(false);

            if (reelRef.current) {
                reelRef.current.style.transition  = 'none'
                reelRef.current.style.transform = `translateX(-${finalIndex * cardWidth}px)`;
            }
        }, 2500)
    }




    return (
        <div>
            <h2>🎰 Рулетка Рандомное число </h2>
            <Button onClick={() => navigate('/roulette')}>Назад</Button>
            <div className="roulette-container" style={{ width: containerWidth, overflow: 'hidden', margin: '0 auto' }}>
                <div className="reel" ref={reelRef} style={{ display: 'flex' }}>
                    {repeatedArr
                        .map((num, idx)=> {
                            const indexInArr = idx % arr.length
                            const isHighlighted = highlightIndex === indexInArr
                            return (
                                <div
                                    key={idx}
                                    className={`card ${isHighlighted ? highlightClass : ''}`}
                                    style={{
                                        width: cardWidth,
                                        height: 100,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginRight: 2,
                                        border: '1px solid #333',
                                        borderRadius: 4,
                                        fontWeight: 'bold',
                                        fontSize: 24,
                                        backgroundColor: isHighlighted
                                            ? highlightClass === 'winner'
                                                ? 'green'
                                                : 'red'
                                            : '#fff',
                                        color: isHighlighted ? '#fff' : '#000',
                                    }}
                                >
                                    {num}
                                </div>
                            );
                        })}
                </div>
            </div>
            <button onClick={spinButton} disabled={isSpinning}>
                {isSpinning ? 'Крутим' : 'Запустить рулетку'}
            </button>
            {result && <div className="result">{result}</div>}
        </div>
    );
}

export default RandomNumber;
