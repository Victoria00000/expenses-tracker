// temporary data for testing 
const obj = [
    {
        type: 'Savings',
        color: '#f9c74f',
        percent: 45
    },
    {
        type: 'Investment',
        color: '#f9c74f',
        percent: 20
    },
    {
        type: 'Expense',
        color: '',
        percent: null
    }
];
// component to be rendered
export const Labels = () => {
    return (
        <>
            {obj.map((v, i) => <LabelComponent key={i} data={v} />)}
        </>
    );
};
// function for the construction of the dinamic labels 
const LabelComponent = ({ data }) => {
    data ?? <></>
    return (
        <div className="labels flex justify-between">
            <div className="flex gap-2">
                <div className="w-2 h-2 rounded py-3" style={{ background: data.color || '#9d4edd' }}></div>
                <h3 className="text-md"> {data.type || '-'} </h3>
            </div>
            <h3 className="font-bold"> {data.percent || '-'} % </h3>
        </div>
    );
};
