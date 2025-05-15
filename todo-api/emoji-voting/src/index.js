import React from 'react';
import ReactDOM from 'react-dom/client';

class EmojiVoting extends React.Component {
    constructor(props) {
        super(props);
        this.emojis = ['😀', '😂', '😍', '😎', '😢'];
        const storedVotes = JSON.parse(localStorage.getItem('emojiVotes')) || {};
        const counts = {};
        this.emojis.forEach(e => {
            counts[e] = storedVotes[e] || 0;
        });
        this.state = {
            counts,
            winner: null,
        };
    }
    handleEmojiClick = (emoji) => {
        this.setState(prevState => {
            const newCounts = {
                ...prevState.counts,
                [emoji]: prevState.counts[emoji] + 1,
            };
            localStorage.setItem('emojiVotes', JSON.stringify(newCounts));
            return { counts: newCounts, winner: null };
        });
    };
    showResults = () => {
        const { counts } = this.state;
        const maxVotes = Math.max(...Object.values(counts));
        if (maxVotes === 0) {
            this.setState({ winner: 'Поки немає голосів' });
            return;
        }
        const winners = this.emojis.filter(e => counts[e] === maxVotes);
        this.setState({ winner: `Переможець: ${winners.join(' ')} з ${maxVotes} голосами!` });
    };
    clearResults = () => {
        const counts = {};
        this.emojis.forEach(e => counts[e] = 0);
        localStorage.removeItem('emojiVotes');
        this.setState({ counts, winner: null });
    };
    render() {
        const { counts, winner } = this.state;
        return (
            <div style={{ fontFamily: 'Arial, sans-serif', padding: 20 }}>
                <h1>Голосування за смайлик</h1>
                <div style={{ display: 'flex', gap: 20 }}>
                    {this.emojis.map(emoji => (
                        <div
                            key={emoji}
                            onClick={() => this.handleEmojiClick(emoji)}
                            style={{ fontSize: 40, textAlign: 'center', cursor: 'pointer', userSelect: 'none' }}
                            title="Натисніть, щоб проголосувати"
                        >
                            {emoji}
                            <div style={{ fontSize: 18 }}>{counts[emoji]}</div>
                        </div>
                    ))}
                </div>
                <div>
                    <button onClick={this.showResults} style={{ marginTop: 20, marginRight: 10, padding: '10px 15px', fontSize: 16 }}>
                        Show Results
                    </button>
                    <button onClick={this.clearResults} style={{ marginTop: 20, padding: '10px 15px', fontSize: 16 }}>
                        Очистити результати
                    </button>
                </div>
                <div style={{ marginTop: 20, fontSize: 24, fontWeight: 'bold' }}>
                    {winner}
                </div>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<EmojiVoting />);
