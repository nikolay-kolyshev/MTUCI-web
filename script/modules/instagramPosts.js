export default function instagramPostsInit() {

    const instagramParser = new Nanogram();
    instagramParser.getMediaByUsername('mtuci.live').then(function (response) {

        // Get photos
        let photos = response.profile.edge_owner_to_timeline_media.edges;
        let items = [];

        let index = 0;

        for (let i = 0; i <= 4; i++) {

            if (index == 2)
                index++;

            let current = photos[i].node;

            let div = document.querySelectorAll(".section_social_inner_gallery_item")[index];
            let link = document.createElement('a');
            let img = document.createElement('img');
            let icon = document.createElement('img');

            let thumbnail = current.thumbnail_resources[4];
            let imgSrc = thumbnail.src;
            let imgAlt = current.accessibility_caption;

            let shortcode = current.shortcode;
            let linkHref = 'https://www.instagram.com/p/' + shortcode;

            div.classList.add();

            img.src = imgSrc;
            img.className = "image";
            img.alt = imgAlt;

            icon.src = "images/svg/social/search.svg";
            icon.className =  "icon";

            link.href = linkHref;
            link.target = '_blank';

            link.appendChild(img);
            link.appendChild(icon);
            div.appendChild(link);

            items.push(div);

            index++;
        }

    });

}