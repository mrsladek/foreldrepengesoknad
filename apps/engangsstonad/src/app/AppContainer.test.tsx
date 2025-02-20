import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { composeStories } from '@storybook/testing-react';
import * as stories from './AppContainer.stories';
import amplitude from 'amplitude-js';

const { VisApp } = composeStories(stories);

amplitude.getInstance().init('test');

describe('<AppContainer>', () => {
    it('skal rendre komponent ok', async () => {
        render(<VisApp />);

        expect(
            await screen.findByText('Husk at hvis barnet ikke er født ennå, må du legge ved en terminbekreftelse.')
        ).toBeInTheDocument();
        expect(screen.getByText('Søknad om engangsstønad')).toBeInTheDocument();

        await userEvent.click(screen.getByText('Start søknaden'));

        expect(await screen.findByText('Du må bekrefte at du har lest og forstått')).toBeInTheDocument();

        await userEvent.click(screen.getByText('Jeg bekrefter at jeg har lest og forstått'));

        await userEvent.click(screen.getByText('Start søknaden'));

        expect(await screen.findByText('Din situasjon')).toBeInTheDocument();

        // TODO Kan med fordel testa gjennom heile applikasjonen her
    });
});
