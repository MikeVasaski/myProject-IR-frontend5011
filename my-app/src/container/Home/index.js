import { useEffect, useState } from "react";
import { searchApi } from "../../service/search";
import { useContextAuthManager } from "../../authentication";


const ViewModel = () => {
    const [isSearch, setIsSearch] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [correction, setCorrection] = useState('')
    const [search, setSearch] = useState("");
    const { user } = useContextAuthManager()
    
    const onSubmit = (e) => {
        setIsSearch(true)
        setIsLoading(true)
        e.preventDefault();
        if (search && search !== ""){
            const payload = {
                query: search,
            };

            searchApi(payload)
                .then(response => {
                    anime = response.data
                    console.log(anime)
                })
                .catch(err => console.log('err', err))
        } else if (search === '') {
            isSearch(false)

        }
        return null;
    };

    const getAnimeData = () => {
        
    }
}