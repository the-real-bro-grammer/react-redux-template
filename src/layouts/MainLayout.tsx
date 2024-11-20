import { FC } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../types/redux/root_state';

interface MainLayoutProps {}

const MainLayout: FC<MainLayoutProps> = (props: MainLayoutProps) => {
    return <></>;
};

const mapStateToProps = (state: RootState) => {
    return {};
};

export default connect(mapStateToProps)(MainLayout);
