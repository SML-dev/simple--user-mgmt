import React from 'react';
import {ButtonAction} from '../../Buttons/ButtonAction/ButtonAction';

export const List = ({data}) => {
    return ( <>
            {data.map((item, index) => ( <tr key={item.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.contact}</td>
                    <td>
                        <ButtonAction/>
                    </td>
                </tr> ))}

        </> );
};
