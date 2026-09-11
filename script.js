const modal = document.querySelector('#portfolio-modal'), modalContent = document.querySelector('#modal-content'), projectTrack = document.querySelector('#project-track'); let projectIndex = 0;
      const projects = [{ title: 'Book\'ed', description: 'ระบบร้านขายหนังสือมือสอง พัฒนาโดยใช้ .NET9 และ SQL Server โดยใช้รูปแบบ MVC ซึ่งครอบคลุมทั้งฝั่งลูกค้าที่สามารถซื้อ-ขาย พร้อมกับฝั่งพนักงานทำการจัดการบัญชี ตรวจหนังสือ การชำระเงิน และการจัดส่ง', images: ['img//Bookstore//Book1.jpg', 'https://placehold.co/1200x750/c7d2fe/3730a3?text=Project+01+-+2'] }, { title: 'HomeyPets', description: 'แอปพลิเคชันร้านรับฝากสัตว์เลี้ยง รองรับการใช้งานผ่านหลายแพลตฟอร์มผ่านการใช้งาน React JS  MongoDB แอปฯสร้างขึ้นเพื่อให้ร้านรับฝากสัตว์เลี้ยงที่ยังใช้ระบบกระดาษเปลี่ยนมาใช้งานผ่านแอปพลิเคชัน การจอง ชำระเงิน และการจัดการภายในร้าน ทำได้อย่างสะดวกในที่เดียว', images: ['https://placehold.co/1200x750/bfdbfe/1d4ed8?text=Project+02+-+1', 'https://placehold.co/1200x750/bfdbfe/1d4ed8?text=Project+02+-+2'] }, { title: 'HomeyPetsChatbot', description: 'แชทบอทเพื่อให้คำแนะนำการดูแลสัตว์เลี้ยงเบื้องต้น การรวบรวมข้อมูลและให้คำแนะนำเพื่อสัตว์เลี้ยงสกัดออกมาผ่าน Python และตอบโต้ด้วยโมเดล Qwen 70b ครอบคลุมเนื้อหาเกี่ยวกับการดูแลสัตว์เลี้ยง อาหาร วัควีน การดูแล สถานพยาบาล และข้อกฎหมาย(มุ่งเน้นบริเวณกรุงเทพฯ)', images: ['https://placehold.co/1200x750/a5b4fc/4338ca?text=Project+03+-+1', 'https://placehold.co/1200x750/a5b4fc/4338ca?text=Project+03+-+2'] }];
      // ภาพตัวอย่างของโปรเจกต์ Book'ed ใน modal carousel
      projects[0].images = [
        'img/Bookstore/Book1.png', 'img/Bookstore/Book2.png',
        'img/Bookstore/Book3.png', 'img/Bookstore/Book4.png',
        'img/Bookstore/Book5.png', 'img/Bookstore/Book6.png',
        'img/Bookstore/Book7.png', 'img/Bookstore/Book8.png'
      ];
      // ภาพตัวอย่างของโปรเจกต์ HomeyPets ใน modal carousel
      projects[1].images = [
        'img/HPog/HPmanapage.png', 'img/HPog/Cuspets.png',
        'img/HPog/Cuspets2.png', 'img/HPog/Cuspets3.png',
        'img/HPog/Pre1.jpg', 'img/HPog/Pre2.jpg', 'img/HPog/Pre3.jpg',
        'img/HPog/Screenshot (187).png', 'img/HPog/Screenshot (206).png'
      ];
      // ภาพตัวอย่างของโปรเจกต์ HomeyPetsChatbot ใน modal carousel
      projects[2].images = [
        'img/HPchatbot/HPC1.png', 'img/HPchatbot/HPC2.png',
        'img/HPchatbot/HPC3.png', 'img/HPchatbot/HPC4.png',
        'img/HPchatbot/HPC5.png'
      ];
      function moveProjects(direction) { projectIndex = Math.max(0, Math.min(2, projectIndex + direction)); projectTrack.style.transform = `translateX(-${projectIndex * (100 / 3)}%)`; }
      document.querySelector('#project-prev').onclick = () => moveProjects(-1); document.querySelector('#project-next').onclick = () => moveProjects(1);
      document.querySelectorAll('.project-card').forEach(card => card.onclick = () => { const project = projects[card.dataset.project]; let imageIndex = 0; modalContent.innerHTML = `<img id="modal-image" src="${project.images[0]}" alt="${project.title}" class="aspect-[16/10] w-full object-cover"><div class="p-6"><h3 class="text-2xl font-bold">${project.title}</h3><p class="mt-2 text-slate-600">${project.description}</p><div class="mt-5 flex justify-center gap-3"><button id="image-prev" class="rounded-lg border px-4 py-2">←</button><button id="image-next" class="rounded-lg border px-4 py-2">→</button></div></div>`; const updateImage = () => document.querySelector('#modal-image').src = project.images[imageIndex]; document.querySelector('#image-prev').onclick = () => { imageIndex = (imageIndex - 1 + project.images.length) % project.images.length; updateImage(); }; document.querySelector('#image-next').onclick = () => { imageIndex = (imageIndex + 1) % project.images.length; updateImage(); }; modal.showModal(); });
      document.querySelectorAll('.certificate').forEach(certificate => certificate.onclick = () => { modalContent.innerHTML = `<img src="${certificate.dataset.certificate}" alt="${certificate.dataset.title}" class="w-full"><p class="p-5 text-center text-lg font-bold">${certificate.dataset.title}</p>`; modal.showModal(); }); document.querySelector('#modal-close').onclick = () => modal.close(); modal.onclick = event => { if (event.target === modal) modal.close(); };
