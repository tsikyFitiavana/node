import React from 'react';
import { create } from 'react-test-renderer'
// import App from '../../App'
import ListTous from '../../Component/ListTous';
describe('getTout', () => {
    it('les resultats doit être liste', async () => {
        const component = create(<ListTous />);
        const instance = component.getInstance();
        await instance.componentDidMount();
        console.log(instance.state)

    })
}) 