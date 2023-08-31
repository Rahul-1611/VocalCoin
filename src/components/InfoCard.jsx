export default function InfoCard() {
    const isIncome = Math.round(Math.random());
    return (
        <div style={{ textAlign: 'center', padding: '0 10%' }}>
            Try saying : <br />
            Add {isIncome ? 'Income ' : 'Expense '}
            for {isIncome ? '$100 ' : '$50 '}
            in Category {isIncome ? 'Business ' : 'Travel '}
            for {isIncome ? 'Monday ' : 'Friday '}...
        </div>
    )
} 