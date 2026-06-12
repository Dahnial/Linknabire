 const firebaseConfig = {
            apiKey: "AIzaSyCcPjAEy81n9GkWtbnEDGj0213FlkonY7o",
            authDomain: "komentarlive.firebaseapp.com",
            projectId: "komentarlive",
            storageBucket: "komentarlive.firebasestorage.app",
            messagingSenderId: "784367055167",
            appId: "1:784367055167:web:3e2a5fb586070ce77c638a"
        };

        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);
        const auth = getAuth(app);

        const LIST_ADMIN = ['dahnial22@gmail.com', 'email-admin2@gmail.com']; 

        const channels = [
            { id: 1, name: "TVRI SPORT", url: "https://ott-balancer.tvri.go.id/live/eds/SportHD/hls/SportHD.m3u8", status: "ONLINE", ket: "TVRI SPORT Stream - No Limit", logo: "TVRI" },
            { id: 2, name: "RCTI", url: "https://sindikasi.inews.id/embed/video/YWdlbnQ9ZGVza3RvcCZ1cmw9aHR0cHMlM0ElMkYlMkZlbWJlZC5yY3RpcGx1cy5jb20lMkZsaXZlJTJGcmN0aSUyRmluZXdzaWQmaGVhZ2h0PTEwMCUyNSZ3aWR0aD0xMDAlMjU=", status: "ONLINE", ket: "No Limit", logo: "RCTI" },
            { id: 3, name: "GTV", url: "https://sindikasi.inews.id/embed/video/YWdlbnQ9ZGVza3RvcCZ1cmw9aHR0cHMlM0ElMkYlMkZlbWJlZC5yY3RpcGx1cy5jb20lMkZsaXZlJTJGZ3R2JTJGaW5ld3NpZCZoZWlnaHQ9MTAwJTI1JndpZHRoPTEwMCUyNQ==", status: "ONLINE", ket: "No Limit", logo: "GTV" },
            { id: 4, name: "iNews", url: "https://sindikasi.inews.id/embed/video/YWdlbnQ9ZGVza3RvcCZ1cmw9aHR0cHMlM0ElMkYlMkZlbWJlZC5yY3RpcGx1cy5jb20lMkZsaXZlJTJGaW5ld3MlMkZpbmV3c2lkJmhlaWdodD0xMDAlMjUmd2lkdGg9MTAwJTI1", status: "ONLINE", ket: "No Limit", logo: "iNews" },
            { id: 5, name: "MNCTV", url: "https://sindikasi.inews.id/embed/video/YWdlbnQ9ZGVza3RvcCZ1cmw9aHR0cHMlM0ElMkYlMkZlbWJlZC5yY3RpcGx1cy5jb20lMkZsaXZlJTJGbW5jdHYlMkZpbmV3c2lkJmhlaWdodD0xMDAlMjUmd2lkdGg9MTAwJTI1", status: "ONLINE", ket: "No Limit", logo: "MNCTV" },
            { id: 6, name: "IDX CHANNEL", url: "https://sindikasi.inews.id/embed/video/YWdlbnQ9ZGVza3RvcCZ1cmw9aHR0cHMlM0ElMkYlMkZjZG4tbGl2ZXR2LXN0dWRpby5tZXR1YmUuaWQlMkZpZHhjaGFubmVsLm0zdTgmaGVpZ2h0PTEwMCUyNSZ3aWR0aD0xMDAlMjU=", status: "ONLINE", ket: "No Limit", logo: "IDX" },
            { id: 7, name: "MNC NEWS", url: "https://sindikasi.inews.id/embed/video/YWdlbnQ9ZGVza3RvcCZ1cmw9aHR0cHMlM0ElMkYlMkZjZG4tbGl2ZXR2LXN0dWRpby5tZXR1YmUuaWQlMkZtbmNuZXdzLm0zdTgmaGVpZ2h0PTEwMCUyNSZ3aWR0aD0xMDAlMjU=", status: "ONLINE", ket: "No Limit", logo: "MNC NEWS" },
            { id: 8, name: "TRANS 7", url: "https://20.detik.com/watch/livestreaming-trans7", status: "ONLINE", ket: "No Limit", logo: "TRANS 7" },
            { id: 9, name: "TRANS TV", url: "https://20.detik.com/watch/livestreaming-transtv", status: "ONLINE", ket: "No Limit", logo: "TRANS TV" },
            { id: 10, name: "CNN INDONESIA", url: "https://www.cnnindonesia.com/tv/embed?ref=transmedia", status: "ONLINE", ket: "No Limit", logo: "CNN INDO" },
            { id: 11, name: "CNBC INDONESIA", url: "https://www.cnbcindonesia.com/embed/tv?ref=transmedia", status: "OFFLINE", ket: "Offline", logo: "CNBC INDO" },
            { id: 12, name: "SCTV", url: "https://www.vidio.com/live/204-sctv-tv-stream/embed?autoplay=true&player_only=true&live_chat=false&mute=false&", status: "LIMIT", ket: "Batas Kuota Berbayar", logo: "SCTV" },
            { id: 13, name: "METRO TV", url: "https://www.dailymotion.com/embed/video/k236ofBIxajxDiti8CY?autoPlay=1&queue-enable=false", status: "ONLINE", ket: "No Limit", logo: "METRO TV" },
            { id: 14, name: "KOMPAS TV", url: "https://www.dailymotion.com/embed/video/k46igSmSMGBIiWsXtWk?autoplay=1", status: "ONLINE", ket: "No Limit", logo: "KOMPAS TV" },
            { id: 15, name: "BERITA SATU", url: "https://beritasatu.tv/playstream.php", status: "ONLINE", ket: "No Limit", logo: "BERITA 1" }
        ];

        const player = document.getElementById('tv-player');
        const playingTitle = document.getElementById('playing-title');
        const playingKet = document.getElementById('playing-ket');
        const listContainer = document.getElementById('channel-list-container');

        const loginBtn = document.getElementById("loginBtn");
        const userAvatar = document.getElementById("userAvatar");
        const nameInput = document.getElementById("name");
        const btnKirim = document.getElementById("btnKirim");
        const scrollArea = document.getElementById("comments-scroll-area");

        let currentUserData = null;

        function playChannel(channel, element) {
            player.src = channel.url;
            playingTitle.innerText = channel.name;
            playingKet.innerText = channel.ket;

            const items = document.querySelectorAll('.channel-item');
            items.forEach(item => item.classList.remove('active'));
            element.classList.add('active');
        }

        channels.forEach((channel, index) => {
            const li = document.createElement('li');
            li.className = 'channel-item';
            if(index === 0) li.classList.add('active');

            let statusBadge = `<span class="chn-status status-online">✔️ Online</span>`;
            if (channel.status === "OFFLINE") statusBadge = `<span class="chn-status status-offline">❌ Offline</span>`;

            let ketBadge = `<span class="chn-status status-nolimit">♾️ No Limit</span>`;
            if (channel.status === "LIMIT") {
                ketBadge = `<span class="chn-status status-limit">⛔ Limit</span>`;
            } else if (channel.status === "OFFLINE") {
                ketBadge = `<span class="chn-status status-offline">❌ Offline</span>`;
            }

            li.innerHTML = `
                <div class="channel-logo">${channel.logo}</div>
                <div class="channel-details">
                    <div class="chn-title">${channel.name}</div>
                    <div class="chn-status-container">
                        ${statusBadge}
                        ${ketBadge}
                    </div>
                </div>
            `;
            li.addEventListener('click', () => playChannel(channel, li));
            listContainer.appendChild(li);
        });

        if(channels.length > 0) {
            player.src = channels[0].url;
            playingTitle.innerText = channels[0].name;
            playingKet.innerText = channels[0].ket;
        }

        onAuthStateChanged(auth, (user) => {
            if (user) {
                currentUserData = {
                    name: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL || 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'
                };

                nameInput.value = user.displayName;
                loginBtn.style.display = "none";
                userAvatar.src = currentUserData.photoURL;
                userAvatar.style.display = "block";

                if (LIST_ADMIN.includes(user.email)) {
                    document.body.classList.add('is-admin');
                } else {
                    document.body.classList.remove('is-admin');
                }
            } else {
                currentUserData = null;
                nameInput.value = "";
                loginBtn.style.display = "block";
                userAvatar.style.display = "none";
                document.body.classList.remove('is-admin');
            }
        });

        loginBtn.onclick = () => {
            const provider = new GoogleAuthProvider();
            signInWithPopup(auth, provider).catch(err => alert("Gagal login: " + err.message));
        };

        userAvatar.onclick = () => {
            if (confirm("Apakah kamu ingin keluar/logout dari akun ini?")) {
                signOut(auth);
            }
        };

        btnKirim.onclick = async () => {
            if (!currentUserData) {
                alert("Kamu harus login dengan Google terlebih dahulu untuk mengirim komentar!");
                return;
            }

            const message = document.getElementById("message").value.trim();
            if(!message){
                alert("Tulis pesan kamu terlebih dahulu");
                return;
            }

            try {
                await addDoc(collection(db, "comments"), {
                    name: currentUserData.name,
                    email: currentUserData.email,
                    photoURL: currentUserData.photoURL,
                    message: message,
                    isPinned: false,
                    createdAt: serverTimestamp()
                });
                document.getElementById("message").value = "";
            } catch (err) {
                alert("Gagal mengirim: " + err.message);
            }
        };

        window.deleteComment = async (id) => {
            if (confirm("Hapus komentar ini?")) {
                try {
                    await deleteDoc(doc(db, "comments", id));
                } catch (err) {
                    alert("Gagal menghapus! Akses ditolak server.");
                }
            }
        };

        window.togglePinComment = async (id, currentStatus) => {
            try {
                if (!currentStatus) {
                    const pinnedQuery = query(collection(db, "comments"), where("isPinned", "==", true));
                    const snapshot = await getDocs(pinnedQuery);
                    snapshot.forEach(async (pinnedDoc) => {
                        await updateDoc(doc(db, "comments", pinnedDoc.id), { isPinned: false });
                    });
                }

                await updateDoc(doc(db, "comments", id), {
                    isPinned: !currentStatus
                });
            } catch (err) {
                alert("Gagal merubah status pin: " + err.message);
            }
        };

        // Ambil data chat (Diubah ke Ascending untuk mempermudah auto-scroll data baru ke bawah)
        const q = query(collection(db, "comments"), orderBy("createdAt", "asc"));

        onSnapshot(q, (snapshot) => {
            let normalHtml = "";
            let pinnedHtml = "";
            let hasPinned = false;

            // Cek posisi scroll sebelum konten baru dirender
            const shouldAutoScroll = (scrollArea.scrollTop + scrollArea.clientHeight >= scrollArea.scrollHeight - 100);

            snapshot.forEach((doc) => {
                const data = doc.data();
                const id = doc.id;
                
                const isAdminComment = LIST_ADMIN.includes(data.email);
                const verifiedBadge = isAdminComment ? `<span class="badge-admin" title="Verified Admin">Verified Admin ✔️</span>` : '';
                
                const commentContentTemplate = `
                    <img class="comment-avatar" src="${data.photoURL}" alt="avatar">
                    <div class="comment-content">
                        <div class="name-wrapper">
                            <span class="name" style="${isAdminComment ? 'color:#60a5fa;' : ''}">${escapeHTML(data.name)}</span>
                            ${verifiedBadge}
                        </div>
                        <div class="text-comment">${escapeHTML(data.message)}</div>
                        <div class="time">
                            ${data.createdAt?.toDate().toLocaleString('id-ID') || 'Mengirim...'}
                        </div>
                    </div>
                    <div class="admin-actions">
                        <button class="pin-btn" onclick="togglePinComment('${id}', ${data.isPinned || false})" title="${data.isPinned ? 'Lepas Pin' : 'Pin Komentar'}">${data.isPinned ? '📌' : '📍'}</button>
                        <button class="delete-btn" onclick="deleteComment('${id}')" title="Hapus Komentar">🗑️</button>
                    </div>
                `;

                if (data.isPinned) {
                    hasPinned = true;
                    pinnedHtml = `
                        <div class="pin-label">📌 Pesan Sematan Admin</div>
                        <div class="comment" style="margin-bottom:0; border: 1px solid #2563eb; background:#1e293b;">
                            ${commentContentTemplate}
                        </div>
                    `;
                } else {
                    normalHtml += `<div class="comment">${commentContentTemplate}</div>`;
                }
            });

            const pinBox = document.getElementById("pinned-comment-container");
            if (hasPinned) {
                pinBox.innerHTML = pinnedHtml;
                pinBox.classList.add("has-pin");
            } else {
                pinBox.innerHTML = "";
                pinBox.classList.remove("has-pin");
            }

            document.getElementById("comments").innerHTML = normalHtml;

            // Jika posisi di bawah, langsung scroll otomatis ke komentar paling baru
            if (shouldAutoScroll) {
                scrollArea.scrollTop = scrollArea.scrollHeight;
            }
        });

        function escapeHTML(str) {
            if (!str) return '';
            return str.replace(/[&<>'"]/g, tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag));
        }