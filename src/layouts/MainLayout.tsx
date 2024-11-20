import { ReactLayout } from '@/types/react/layout';
import IReactLayoutProps from '@/types/react/layout_props';
import { connect } from 'react-redux';
import { RootState } from '../types/redux/root_state';

interface MainLayoutProps extends IReactLayoutProps {}

const MainLayout: ReactLayout<MainLayoutProps> = (props: MainLayoutProps) => {
    return (
        <>
            <div className='container'>{props.children}</div>
        </>
    );
};

const mapStateToProps = (state: RootState) => {
    return {};
};

export default connect(mapStateToProps)(MainLayout);
