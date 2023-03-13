import React, { useEffect, useState } from "react";
import MyButton from '../components/UI/buttons/MyButton';
import PostList from '../components/PostList';
import '../components/styles/App.css';
import PostForm from '../components/PostForm';
import { PostFilter } from '../components/PostFilter';
import MyModale from '../components/UI/modale/MyModale';
import { usePosts } from '../hooks/usePosts';
import PostService from '../API/PostService';
import { Loader } from '../components/UI/loader/loader';
import { useFetching } from '../hooks/useFetching';
import { getPagesCount } from '../utils/pages';
import Pagination from '../components/UI/pagination/Pagination';


function Posts() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({ sort: '', query: '' })
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)

    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data)
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPagesCount(totalCount, limit))
    })



    useEffect(() => {
        fetchPosts(limit, page)
    }, [])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setVisible(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const [visible, setVisible] = useState(false);
    const openModule = () => {
        setVisible(true)
    }

    const changePage = (page) => {
        setPage(page)
        fetchPosts(limit, page)
    }

    return (
        <div className="App">
            <MyButton style={{ marginTop: 30 }} onClick={openModule} >Создать пост</MyButton>
            <MyModale visible={visible} setVisible={setVisible}>
                <PostForm create={createPost} />
            </MyModale>

            <hr style={{ margin: '15px 0' }} />
            <PostFilter filter={filter} setFilter={setFilter} />
            {postError &&
                <h1>Произошла ошибка ${postError}</h1>
            }
            {isPostsLoading
                ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}><Loader /></div>
                : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS" />
            }
            <Pagination
                page={page}
                totalPages={totalPages}
                changePage={changePage} />
        </div>
    );
}

export default Posts;
