import { HeaderProvider } from './HeaderContext';
import { WindowProvider } from './WindowContext';

export default function Providers({ children }) {
    return (
        <WindowProvider>
            <HeaderProvider>{children}</HeaderProvider>
        </WindowProvider>
    );
}
