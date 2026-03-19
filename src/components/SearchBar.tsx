type SearchBarProps = {
    value: string
    onChange: (value: string) => void 
}

export default function SearchBar({ value, onChange}: SearchBarProps) {
    return (
        <div className="mb-4">
            <label htmlFor="search" className="form-label">
                Buscar tarea
            </label>
            <input 
                type="text" 
                id="search"
                className="form-control"
                placeholder="Escribe al menos 3 caracteres..."
                value={value}
                onChange={(event) => onChange(event.target.value)}
            />
        </div>
    )
}