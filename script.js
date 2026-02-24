let interviewList = [];
let rejectedList = [];
let currentStatus = 'all-filter-btn';
let total = document.getElementById('total');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');
const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');
const allCardSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main');
const filterSection = document.getElementById('filtered-section');


function calculateCount() {
    total.innerText = allCardSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}
calculateCount();
function toggleStyle(id) {
    

    [allFilterBtn, interviewFilterBtn, rejectedFilterBtn].forEach(btn => {
    btn.classList.remove('bg-blue-500', 'text-white');
    btn.classList.add('bg-white', 'text-gray-600', 'border', 'border-gray-200');
    });
    allFilterBtn.classList.remove('bg-blue-500', 'text-white');
    interviewFilterBtn.classList.remove('bg-blue-500', 'text-white');
    rejectedFilterBtn.classList.remove('bg-blue-500', 'text-white');



    const selected = document.getElementById(id);
    currentStatus = id;


    
selected.classList.remove('bg-white', 'text-gray-600', 'border', 'border-gray-200');
selected.classList.add('bg-blue-500', 'text-white');

    
if (id == 'interview-filter-btn') {
     allCardSection.classList.add('hidden');
      filterSection.classList.remove('hidden');
      renderInterview();
} else if (id == 'all-filter-btn') {
     allCardSection.classList.remove('hidden');
     filterSection.classList.add('hidden');
} else if (id == 'rejected-filter-btn') {
     allCardSection.classList.add('hidden');
     filterSection.classList.remove('hidden');
     renderRejected();
    }
}
mainContainer.addEventListener('click', function (event) {
    const deleteBtn = event.target.closest('.btn-delete');



if (deleteBtn) {
    const parentNode = deleteBtn.closest('.card');
    const companyName = parentNode.querySelector('.companyName').innerText;

    parentNode.remove();

    interviewList = interviewList.filter(item => item.companyName !== companyName);
    rejectedList = rejectedList.filter(item => item.companyName !== companyName);

    calculateCount();
}
    if (event.target.classList.contains('interview-btn')) {
    const parentNode = event.target.closest('.card');
   const companyName = parentNode.querySelector('.companyName').innerText;
      const role = parentNode.querySelector('.role').innerText;
      const details = parentNode.querySelector('.details').innerText;
      const desc = parentNode.querySelector('.desc').innerText;

    const statusEl = parentNode.querySelector('.status');
statusEl.innerText = 'INTERVIEWING';
statusEl.className = 'status inline-block bg-emerald-50 text-emerald-600 border border-emerald-200 text-xs font-bold px-3 py-1 rounded';

        const cardInfo = {
            companyName,
            role,
            details,
            status: 'INTERVIEWING',
            desc
        };
        if (!interviewList.find(item => item.companyName === companyName)) {
            interviewList.push(cardInfo);
        }
        const jobExist = interviewList.find(item => item.companyName == cardInfo.companyName);
        if (!jobExist) {
            interviewList.push(cardInfo);
        }
        rejectedList = rejectedList.filter(item => item.companyName != cardInfo.companyName);

        if (currentStatus == 'rejected-filter-btn') {
            renderRejected();
        }
        calculateCount();
    } else if (event.target.classList.contains('rejected-btn')) {
        const parentNode = event.target.closest('.card');
    const companyName = parentNode.querySelector('.companyName').innerText;
      const role = parentNode.querySelector('.role').innerText;
      const details = parentNode.querySelector('.details').innerText;
       const desc = parentNode.querySelector('.desc').innerText;

const statusEl = parentNode.querySelector('.status');
statusEl.innerText = 'REJECTED';
statusEl.className = 'status inline-block bg-red-50 text-red-600 border border-red-200 text-xs font-bold px-3 py-1 rounded';
        const cardInfo = {
            companyName,
            role,
            details,
            status: 'REJECTED',
            desc
        };
        const jobExist = rejectedList.find(item => item.companyName == cardInfo.companyName);
        if (!jobExist) {
            rejectedList.push(cardInfo);
        }
        interviewList = interviewList.filter(item => item.companyName != cardInfo.companyName);

        if (currentStatus == "interview-filter-btn") {
            renderInterview();
        }
        calculateCount();
    }
});
function renderInterview() {
    filterSection.innerHTML = '';

    for (let interview of interviewList) {
        let div = document.createElement('div');
        div.className = 'card bg-white border border-gray-200 rounded-lg p-6 shadow-sm relative';
        div.innerHTML = `
    <button type="button" class="btn-delete absolute top-6 right-6 text-gray-400 hover:text-red-500 transition-colors">
        <i class="fa-regular fa-trash-can"></i>
    </button>
    <div class="space-y-4 pr-10">
        <div>
       <p class="companyName text-lg font-bold text-slate-800">${interview.companyName}</p>
      <p class="role text-gray-500">${interview.role}</p>
        </div>
     <p class="details text-xs font-medium text-gray-400 uppercase">${interview.details}</p>
     <span class="status inline-block bg-emerald-50 text-emerald-600 border border-emerald-200 text-xs font-bold px-3 py-1 rounded">${interview.status}</span>
        <p class="desc text-sm text-gray-600 leading-relaxed">${interview.desc}</p>
     <div class="flex gap-3 pt-2">
    <button class="interview-btn bg-white text-emerald-600 border border-emerald-500 text-xs font-bold px-4 py-2 rounded">Interview</button>
   <button class="rejected-btn bg-white text-red-500 border border-red-400 text-xs font-bold px-4 py-2 rounded">Rejected</button>
        </div>
    </div>
`;
        filterSection.appendChild(div);
    }
}









function renderRejected() {
    filterSection.innerHTML = '';
    for (let rejected of rejectedList) {
        let div = document.createElement('div');
        div.className = 'card bg-white border border-gray-200 rounded-lg p-6 shadow-sm relative';
        div.innerHTML = `
            <div class="space-y-4">
                <div>
               <p class="companyName text-lg font-bold text-slate-800">${rejected.companyName}</p>
                    <p class="role text-gray-500">${rejected.role}</p>
             </div>
                <p class="details text-xs font-medium text-gray-400 uppercase">${rejected.details}</p>
              <span class="status inline-block bg-red-50 text-red-600 border border-red-200 text-xs font-bold px-3 py-1 rounded">${rejected.status}</span>
                <p class="desc text-sm text-gray-600 leading-relaxed">${rejected.desc}</p>
            <div class="flex gap-3 pt-2">
                  <button class="interview-btn bg-white text-emerald-600 border border-emerald-500 text-xs font-bold px-4 py-2 rounded">Interview</button>
               <button class="rejected-btn bg-white text-red-500 border border-red-400 text-xs font-bold px-4 py-2 rounded">Rejected</button>
          </div>
            </div>
        `;
    filterSection.appendChild(div);
    }
}