/* 사용자가 만든 페이지 불러오기 */
import Router from '../routes';
import { ProjectProvider } from '../Context/ProjectContext';
import { MemoryProvider } from '../Context/MemoryContext';
import { SeminarProvider } from '../Context/SeminarContext';

/* 최상위 페이지 */
const App = () => {
    return (
        <SeminarProvider>
            <ProjectProvider>
                <MemoryProvider>
                    <Router />
                </MemoryProvider>
            </ProjectProvider>
        </SeminarProvider>
    )
}

/* App/index.js에서 import하기 위한 설정 */
export default App;