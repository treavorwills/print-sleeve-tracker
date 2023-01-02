import React, { useState } from 'react';
import Data from '../customer-data.json';

export default function SearchBar() {
    const [query, setQuery] = useState("")
    console.log(Data);
    return (
        <div>
            <input placeholder="search first names" onChange={event => setQuery(event.target.value)} />
            {
                Data.filter(customer => {
                    if (query === "") {
                        return customer;
                    } else if (customer.customer_name.toLowerCase().includes(query.toLowerCase())) {
                        return customer;
                    } else if (customer.status.toLowerCase().includes(query.toLowerCase())) {
                        return customer;
                    } else if (customer.notes.toLowerCase().includes(query.toLowerCase())) {
                        return customer;
                    }
                })
                .map((customer) => (
                    <div key={customer.customer_name} class="border">
                        <h1>{customer.customer_name} - {customer.customer_number}</h1>
                        <p>Project Status: {customer.status}</p>
                        <p>Open since: {customer.start_date}</p>
                        <p>Follow-up on: {customer.reminder_date}</p>
                        <p>Notes: {customer.notes}</p>
                    </div>
                ))
            }
        </div>
    )
}
